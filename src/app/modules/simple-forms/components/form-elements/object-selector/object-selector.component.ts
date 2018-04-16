import { Component, OnInit } from '@angular/core';
import { ElementBaseComponent } from '../element-base/element-base.component';
import { Config, ObjectGroup } from '../../../simple-forms.types';
import { current } from 'codelyzer/util/syntaxKind';

@Component({
  selector: 'app-object-selector',
  templateUrl: './object-selector.component.html',
  styleUrls: ['./object-selector.component.scss']
})
export class ObjectSelectorComponent extends ElementBaseComponent implements OnInit {

  objectDisplayProperty: string;
  objectGroupProperty: string;
  shouldGroupObjects: boolean;

  filteredObjectGroups: ObjectGroup[];

  constructor() {
    super();
  }

  ngOnInit() {
    this.objectDisplayProperty = this.elementData.getConfig(Config.ObjectDisplayProperty);
    this.objectGroupProperty = this.elementData.getConfig(Config.ObjectGroupProperty);
    this.shouldGroupObjects = this.elementData.getConfig(Config.ShouldGroupObjects);
    if (this.shouldGroupObjects && this.objectGroupProperty) {
      this.filterObjectGroups();
    }
  }

  selectObject($object) {
    this.formGroup.get(this.elementData.inputId).setValue($object);
  }

  getObjectDisplay(object: {}) {
    const objectDisplayProperty: string = this.elementData.getConfig(Config.ObjectDisplayProperty);
    return object[objectDisplayProperty];
  }

  isSelected(object: {}) {
    const objectDisplayProperty: string = this.elementData.getConfig(Config.ObjectDisplayProperty);
    const currentValue = this.formGroup.get(this.elementData.inputId).value;
    return currentValue ? currentValue[objectDisplayProperty] === object[objectDisplayProperty] : false;
  }

  filterObjectGroups() {
    const objectGroups: ObjectGroup[] = [];
    const objectGroupFilter = {};
    this.elementData.optionObjects.forEach((object: {} ) => {
      if (!objectGroupFilter[object[this.objectGroupProperty]]) {
        objectGroupFilter[object[this.objectGroupProperty]] = [];
      }
      objectGroupFilter[object[this.objectGroupProperty]].push(object);
    });

    Object.keys(objectGroupFilter).forEach((groupName: string) => {
      objectGroups.push(new ObjectGroup(
        {
          groupName: groupName,
          objects: objectGroupFilter[groupName]
        }
      ));
    });

    this.filteredObjectGroups = objectGroups;
  }

}
