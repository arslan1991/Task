import React from "react";

import {
    CWorkbench,
    CGroup, cmember,
    CSelect, ccase, cdefault, unansweredCase,
    CString,
    renderTree, rootPath,
    Problems,
} from "opencpq";
import { CBoolean } from "opencpq/dst/lib/primitives";



const model = CGroup([

    cmember("color_selection", "Color Selection", CSelect([
        unansweredCase("Select Color"),
        ccase("Jet"),
        ccase("Royal"),
        ccase("Chilli"),
        ccase("Mango"),
        ccase("Bubmlebee"),
        ccase("Ocean"),
        ccase("Leaf"),
        ccase("Calypso"),
        ccase("Granite"),
        ccase("Ink"),
    ])),

    cmember("coushion_selection", "Coushion Selection", CSelect([
        unansweredCase("Select Coushion"),
        ccase("Size 1.1"),
        ccase("Size 1.2"),
        ccase("Size 2.1"),
        ccase("Size 2.2"),
    ])),

    cmember("back_support", "Back Supports", CSelect([
        unansweredCase("Select Back Support"),
        ccase("For Size 1 Bingo"),
        ccase("For Size 2 Bingo"),
        
    ])),

    cmember("head_support", "Head Supports", CSelect([
        unansweredCase("Select Head Support"),
        ccase("Comfi Standard"),
        ccase("Comfi Extended"),
        ccase("Mount & Stem Hardware"),
    ])),

    cmember("arm_support", "Arm Supports", CSelect([
        unansweredCase("Select Arm Support"),
        ccase("To Fit Size 1"),
        ccase("To Fit Size 2"),
        
    ])),


    cmember("pelvic_support", "Pelvic Supports", CSelect([
        unansweredCase("Select Pelvic Support"),
        ccase("To Fit Size 1"),
        ccase("To Fit Size 2"),
    ])),

    cmember("lateral_support", "Lateral Supports", CSelect([
        unansweredCase("Select Lateral Support"),
        ccase("Narrow Lateral Support"),
        ccase("Broad Lateral Support"),
        
    ])),

    cmember("accessory_selection_items", "Accessory Selection Items:", CGroup([
       
        
   

    cmember("shoulder_harness", "Shoulder Harness", CSelect([
        unansweredCase("Select Shoulder Harness"),
        ccase("X-Small Centrepoint"),
        ccase("Small Centrepoint"),
        
    ])),

    cmember("hip_belt", "Hip Belt", CSelect([
        unansweredCase("Select Color"),
        ccase("2 Point Hip Belt"),
        ccase("4 Point Hip Belt"),
        
    ])),

    cmember("feet_positioing", "Feet Positioning", CSelect([
        unansweredCase("Select Color"),
        ccase("Foot Plate Spacer Block"),
        ccase("Foot Positioning Sadals"),
        ccase("Height Kit/Raiser Blocks"),
    ])),

    cmember("critical_care_options", "Critical Care Options", CSelect([
        unansweredCase("Select Critical Care Option"),
        ccase("IV Pole"),
        ccase("Oxygen Bottle Holder"),
        ccase("Chasis Mount Tray"),
    ])),

    cmember("accessory_bag", "Accessory Bag", CSelect([
        unansweredCase("Select Accessory Bag"),
        ccase("Handle Mounted Bag"),
        ccase("Fits Both Size 1 & Size 2"),
        
    ])),

    cmember("swivel_lock", "Swivel Lock:", CGroup([
        cmember("for_both_size_1_&_size_2", "For Both Size 1 & Size 2", CBoolean([

        
    ])),
    ])),
    cmember("hand_strap", "Hand Strap:", CGroup([
        cmember("wrist_safety_strap", "Wrist Safety Strap", CBoolean([

       
        
        ])),
    ])),
    cmember("indoor_base", "Indoor Base:", CGroup([
        cmember("cobra_high_low_indoor_frame", "Cobra High Low Indoor Frame", CBoolean([
        
        
        ])), 
    ])),

])),
])

const workbench = CWorkbench(
    ctx => ({}),
    innerNode => (
        <div>
            <h1>Configure Your Wonderseat</h1>
            {innerNode.render()}
        </div>
    ),
    model
);

renderTree(
    workbench,
    undefined,
    () => ({
        path: rootPath,
        problems: new Problems(),
    }),
    document.getElementsByTagName("body")[0]
);
