# NgxBasicTemplater

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## Code scaffolding

Run `ng generate ngx-basic-templater:basic-form-component --name YOUR_COMPONENT_NAME` to generate a new form component. 
> Note: Don't forget to run `npm i @ng-select/ng-select bootstrap jquery ngx-image-compress` before running the generate command. After installing add the following lines in your `angular.json` file. 
 ` "styles": [` 
        `"node_modules/bootstrap/dist/css/bootstrap.css",`
        `....`
    `],`

 ` "scripts": [` 
        `"node_modules/jquery/dist/jquery.js",`
        `"node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",`
        `....`
    `],`


After adding all the dependencies you will also need to update your module where you have declared the generated component

> Note: Add this to `YOUR_MODULE.module.ts` 
`imports: [`
    `....`
    `FormsModule,`
    `ReactiveFormsModule,`
    `NgSelectModule`
  `],`
  `providers:[`
    `.....`
    `NgxImageCompressService],`
## Build

Run `ng serve` to run the project.

