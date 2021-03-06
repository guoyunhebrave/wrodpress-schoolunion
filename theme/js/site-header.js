/* 
 * Copyright (C) 2015 Guo Yunhe <guoyunhebrave at gmail.com>
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


/* Top Bar Fusion Effect
 *
 * Detect scroll length of page
 */

SiteHeaderFusion = {
    init: function () {
        this.fusion();
        this.bindEvent();
    },
    bindEvent: function() {
        jQuery(window).scroll(this.fusion);
        jQuery(window).resize(this.fusion);
    },
    fusion: function () {
        if (jQuery(document).scrollTop() < jQuery('#site-header').height()) {
            jQuery('#site-header').addClass('fusion');
        } else {
            jQuery('#site-header').removeClass('fusion');
        }
    }
};