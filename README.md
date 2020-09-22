## ResponsiveTabs
Custom Tabs pluggable widget for the Mendix platform with responsive/mobile view

## Features
[feature highlights]
-Add custom content/widgets to created tab sections
-Specify custom minimum screen size for desktop view
## Usage
Installation for development:
1. Change line 9 and 10 (the widgetPath and projectPath config) of package.json to the directory of your Mx project widgets folder and project path respectively.
2. In terminal, execute "npm run build" to get it to your Mx project. 
3. in Mendix Studio, hit F4 or "Synchronize Project Directory" under Project dropdown at the top
4. Widget should appear in your custom widgets section of your toolbox.
(if it fails to update within Mx Studio, right click a widget already in place and select "Update All Widgets"

For just usage in a Mx project:
1. Navigate to CustomResponsiveTabs/dist/1.0.0 and move the mendix.ResponsiveTabs mpk file into the widgets folder of your Mendix Project
2. Synchronize Project Directory

## Demo project
[link to sandbox]

## Issues, suggestions and feature requests
[link to GitHub issues]

## Development and contribution
Hardy Chen
Russell Hite
Conner Charlebois
