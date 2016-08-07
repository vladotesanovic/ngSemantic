## version: 1.0.37

- sm-input now can exists without form.

## version: 1.0.36

- Added [(model)] two way data binding to sm-select 

## version: 1.0.35

- Removed need for classes 'ui list' and 'ui menu' on sm-list and sm-menu

## version: 1.0.34

- Improved sm-message component
- Improved sm-dropdown component

## version: 1.0.33

- Added smDeviceVisibility directive, with available options: mobile, table, desktop, mobile only, tablet only, computer only
- Added basic implementation of smDirVisibility, http://semantic-ui.com/behaviors/visibility.html
- removed requirement for class="item" on sm-item component
- Improved sm-search component

## version: 1.0.32

- fixed sidebar bug

## version: 1.0.31

- sm-search simple implementation of component is added
- sm-form is removed
- added types to sm-checkbox ( radio, slider, toggle )

## version: 1.0.30

- &lt;sm-select> &lt;sm-dropdown>, basic implementation added
- &lt;sm-modal>, &lt;sm-popup>, &lt;sm-sidebar> have hide() method, which work in same fashion as show() method

## version: 1.0.28

- &lt;sm-rating>, added
- &lt;sm-modal> now accept &lt;modal-content> and &lt;modal-actions>

## version: 1.0.27

- Update to Angular rc.4
- Update to Semantic UI 2.2.1
- &lt;sm-input>, &lt;sm-textarea>, &lt;sm-checkbox> work with new Form API
- sm-modal-directive, sm-popup-directive, sm-dimmer-directive, sm-sidebar-directive are removed
- &lt;sm-modal>, &lt;sm-popup>, &lt;sm-dimmer>, &lt;sm-sidebar> have show() method, so they can be controlled with template variable.
- sm-dir-tooltip are pure CSS now
- &lt;sm-progress> now accept class ```indicating```

## version: 1.0.26

- Templates for &lt;sm-card> and &lt;sm-accordion> is much more declarative.

## version: 1.0.25

- smModalDir
- smSidebarDir
- smAccordion

Accept options. Options are JavaScript objects which represent settings from module.

## version: 1.0.24

In process of aligning stuff with: https://angular.io/docs/ts/latest/guide/style-guide.html names are changed to:

- sm-dir-sidebar -> smDirSidebar
- sm-dir-dimmer -> smDirDimmer
- sm-form -> smForm
- sm-dir-modal -> smDirModal
- sm-dir-popup -> smDirPopup
- sm-dir-tooltip -> smDirTooltip