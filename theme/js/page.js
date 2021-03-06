/* 
 * Copyright (C) 2015 Guo Yunhe <guoyunhebrave@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

jQuery(function () {
    jQuery('a[href*="#page/"]').click(function (event) {
        event.preventDefault();
        
        var href = jQuery(this).attr('href');
        var slug;
        
        if (href.indexOf('#page/') > -1) {
            slug = href.match(/#page\/(\w+)/)[1];
        }
        
        viewStaticPage(slug);
    });
});



/**
 * Open popup to query and display static page
 * @param {Number} pageId
 */
function viewStaticPage(slug) {
    openPopup(jQuery('#static-page-popup'));

    var request = {
        'action': 'get_page_data',
        'page_slug': slug
    };
    jQuery.ajax({
        url: ajaxurl,
        data: request,
        method: 'POST',
        dataType: 'json'
    }).done(function (response) {
        jQuery('#static-page-popup .page-content').html(response['page_content']);
        jQuery('#static-page-popup .page-title').html(response['page_title']);
    });
}