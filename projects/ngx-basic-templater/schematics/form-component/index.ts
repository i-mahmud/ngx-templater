import {Rule,apply, applyTemplates,url,move,chain,mergeWith} from '@angular-devkit/schematics';
import {strings,normalize} from '@angular-devkit/core';
import { FormComponent } from './form-component';

export function formComponentGenerator(options: FormComponent):Rule{
    return ()=>{
        const templateSource = apply(
            url('./files'),[
                applyTemplates({
                    classify: strings.classify,
                    dasherize: strings.dasherize,
                    name:options.name
                }),
                move(normalize(`/${options.path}/${strings.dasherize(options.name)}`))
            ]
        )

        return chain([
            mergeWith(templateSource)
        ])
    }
}