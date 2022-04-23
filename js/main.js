"use strict";

let fullscreenNav = (() => {
	
	const toggler = document.querySelector(".js-toggler");
	const nav = document.querySelector(".js-fs-nav");
	const navItems = document.querySelectorAll(".js-fs-nav-item");
	let navActive = false;
	const classes = {
		nav: {
			active: "fs-nav--active"
		},
		navItem: {
			active: "fs-nav__item--active"
		},
		toggler: {
			active: "toggler--active"
		}
	}
	
	let toggleNav = () => {
		if (!navActive) {
			toggler.classList.add(classes.toggler.active);
			nav.classList.add(classes.nav.active);
			
			navItems.forEach((navItem, i) => {
				navItem.classList.add(classes.navItem.active);
				navItems.item(i).style.transitionDelay = (i + 1) * 50 + "ms"; // should be in some settings object..
			});
			
			navActive = true;
		} else if (navActive) {
			toggler.classList.remove(classes.toggler.active);
			nav.classList.remove(classes.nav.active);
			
			navItems.forEach((navItem, i) => {
				navItem.classList.remove(classes.navItem.active);
				navItems.item(i).style.transitionDelay = "";
			});
			
			navActive = false;
		}
	};
	
	let addEventListeners = () => {
		toggler.addEventListener("click", toggleNav);
	};

	let init = () => {
		addEventListeners();
	};
	
	return {
		init: init
	};
	
})();

fullscreenNav.init();