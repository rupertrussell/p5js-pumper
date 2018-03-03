// Rupert Russell
// https://github.com/rupertrussell/p5js-pumper
// 3 March 2018
// item and location photograph dimenstion width 780  height 500 pixels

var version = 33;
var itemNumber = 0;
var myFont;
var itemName = [];
var itemPicture = [];
var itemLocation = [];
var itemPictureLocation = [];
var itemImg = [];
var firstRun = true;
var firstDraw = true;
var displayItem = true;
var clickNumber = 0;

itemName[0] = '7.8 metre Centurion Two Stage Extension Ladder';
itemPicture[0] = '2stageLadder.jpg';
itemLocation[0] = ' Externally on the appliance';
itemPictureLocation[0] = 'ladderGantry.jpg';

itemName[1] = '8 x LED Scene Lights';
itemPicture[1] = 'LEDSceneLights.jpg';
itemLocation[1] = ' Three each side and rear';
itemPictureLocation[1] = 'LEDSceneLightsLocaion.png';

itemName[2] = '1 x Class B Pick-Up-Stick and Line 1.5 Meters long';
itemPicture[2] = 'ns1-1.png';
itemLocation[2] = ' NS1 (Upper Locker)';
itemPictureLocation[2] = 'pick-up-line2a.jpg';

itemName[3] = '2 x Ceiling Hooks and Handles';
itemPicture[3] = 'ceiling.png';
itemLocation[3] = ' NS1 (Upper Locker)';
itemPictureLocation[3] = 'ns1-2a.png';

itemName[4] = '1 x Class B Pick-upLine 1.5 meters long';
itemPicture[4] = 'pick-up-line.png';
itemLocation[4] = ' NS1 (Upper Locker)';
itemPictureLocation[4] = 'pick-up-line.jpg';

itemName[5] = '1 x BA Staging Mat (with Bag) ';
itemPicture[5] = 'ns1-4.png';
itemLocation[5] = ' NS1 (Upper Locker)';
itemPictureLocation[5] = 'nearside-upper.png';

itemName[6] = '4 x E-Flares (in Bag) ';
itemPicture[6] = 'eflare.png';
itemLocation[6] = ' NS1 (Lower Locker)';
itemPictureLocation[6] = 'ns1-L1.png';

itemName[7] = '2 x Traffic Tapes Red/White 100mm x 75mm ';
itemPicture[7] = 'tape.png';
itemLocation[7] = ' NS1 (Lower Locker)';
itemPictureLocation[7] = 'ns1-L2.png';

itemName[8] = '6 x Witches Hats ';
itemPicture[8] = 'WitchesHats.png';
itemLocation[8] = ' NS1 (Lower Locker)';
itemPictureLocation[8] = 'WitchesHatsLocation.jpg';

itemName[9] = '1 x Insulated Cooler Bag (Blue) ';
itemPicture[9] = 'cooler.png';
itemLocation[9] = ' NS2 Top Shelf';
itemPictureLocation[9] = 'coolerLocation.png';

itemName[10] = '2 x 7 Litre Clear Stowage Containers ';
itemPicture[10] = 'tub-biohazard.jpg';
itemLocation[10] = ' Near Side 2';
itemPictureLocation[10] = 'ClearStowageContainersLocation.jpg';

itemName[11] = '1 x Ladder Gantry Locking Handle ';
itemPicture[11] = 'GantryHandle.jpg';
itemLocation[11] = ' NS2 Left of Ladder';
itemPictureLocation[11] = 'GantryHandleLocation.jpg';

itemName[12] = 'Combination Ladder (Little Giant) ';
itemPicture[12] = 'littleGiant.png';
itemLocation[12] = ' Near Side 2';
itemPictureLocation[12] = 'littleGiantLocation.png';

itemName[13] = '1 x Soft Pack First Aid Kit ';
itemPicture[13] = 'firstAidKit.png';
itemLocation[13] = ' Near Side 2';
itemPictureLocation[13] = 'ns2-5.png';

itemName[14] = '10 x Safety Glases in Pouches';
itemPicture[14] = 'SafetyGlases.jpg';
itemLocation[14] = ' Near Side 2';
itemPictureLocation[14] = 'SafetyGlasesLocation.jpg';

itemName[15] = 'Nitrile Gloves';
itemPicture[15] = 'disposableGloves.jpg';
itemLocation[15] = ' Near Side 2';
itemPictureLocation[15] = 'boxGlovesLocation.jpg';

itemName[16] = 'Hooligan Tool';
itemPicture[16] = 'hoolganTool.png';
itemLocation[16] = ' Near Side 2';
itemPictureLocation[16] = 'hoolganToolLocation.png';

itemName[17] = 'Hose Lay Pack (Blue)';
itemPicture[17] = 'HoseLayPackBlue.jpg';
itemLocation[17] = ' Near Side 3';
itemPictureLocation[17] = 'HoseLayPackBlueLocation.png';

itemName[18] = 'Attack Pack (High-rise Kit) (Red)';
itemPicture[18] = 'attackPack.jpg';
itemLocation[18] = ' Near Side 3';
itemPictureLocation[18] = 'attackPackLocation.jpg';

itemName[19] = '2 x 65mm Storz Dividing Breaching Pieces';
itemPicture[19] = 'dividingBreach.png';
itemLocation[19] = ' Near Side 3';
itemPictureLocation[19] = 'ns3-1.png';

itemName[20] = '4 x 30 metre 65mm Canvas Hoses';
itemPicture[20] = '64mmCanvas.png';
itemLocation[20] = ' Near Side 3';
itemPictureLocation[20] = '64mmCanvasLocation.png';

itemName[21] = '2 x 15 metre 65mm Duraline Hoses';
itemPicture[21] = '65mmDuraline.jpg';
itemLocation[21] = ' Near Side 3';
itemPictureLocation[21] = '2x64mmLocation.png';

itemName[22] = '1 x 30 metre 38mm Duraline';
itemPicture[22] = '38mm.png';
itemLocation[22] = ' Near Side 3';
itemPictureLocation[22] = '38mmLocation.png';

// nearside rear
itemName[23] = '2 x One Key Spanners (Hydrant Key)';
itemPicture[23] = 'hydrant-key.png';
itemLocation[23] = ' NS Rear Locker';
itemPictureLocation[23] = 'RNS1.png';

itemName[24] = 'Hose Bandages';
itemPicture[24] = 'HoseBandages.png';
itemLocation[24] = ' Rear Lockers';
itemPictureLocation[24] = 'hose-bandagesLocation.png';

itemName[25] = '90 to 65mm Storz Adaptor';
itemPicture[25] = '90-65mmStorz.png';
itemLocation[25] = ' NS Rear Locker';
itemPictureLocation[25] = '90-65mmStorzLocation.png';

itemName[26] = '2 x 65mm Storz 64mm 3 TPI Female Adaptors';
itemPicture[26] = '65mmStorz-3TIPFemale.png';
itemLocation[26] = ' NS Rear Locker';
itemPictureLocation[26] = '65mmStorz-3TIPFemaleLocation.png';

itemName[27] = '65mm Storz Blank Cap (blue)';
itemPicture[27] = '65mmStorzBlankCap.png';
itemLocation[27] = ' NS Rear Locker';
itemPictureLocation[27] = '65mmStorzBlankCapLocation.png';

itemName[28] = '65mm Foam Branch';
itemPicture[28] = 'foamBranch.jpg';
itemLocation[28] = ' OS3 (Middle Locker)';
itemPictureLocation[28] = 'foamBranchLocation.jpg';

itemName[29] = 'Foam Inductor';
itemPicture[29] = 'foamInductor.jpg';
itemLocation[29] = ' OS3 (Middle Locker)';
itemPictureLocation[29] = 'foamInductorLocation.jpg';

itemName[30] = '1 x 1 meter long Foam Pickup Tube';
itemPicture[30] = 'foamPickup.jpg';
itemLocation[30] = ' OS3 (Middle Locker)';
itemPictureLocation[30] = 'foamPickupLocation.jpg';

itemName[31] = '2 x Carbouy Spanners';
itemPicture[31] = 'carbouySpanners.jpg';
itemLocation[31] = ' OS3 (Middle Locker)';
itemPictureLocation[31] = 'carbouySpannersLocation.jpg';

itemName[32] = '2 x 4.5kg ABE Dry Chemical Extinguishers';
itemPicture[32] = 'FB45ABE.jpg';
itemLocation[32] = ' OS3 (Middle Locker)';
itemPictureLocation[32] = 'extinguishersLocation.jpg';

itemName[33] = '1 x 9 Litre "B" Class Foam Extinguisher';
itemPicture[33] = '9-Litre-Foam-Fire-Extinguisher-1.jpg';
itemLocation[33] =  'OS3 (Middle Locker)';
itemPictureLocation[33] = 'extinguishersLocation.jpg';

itemName[34] = '1 x 65mm 5 Bar 2000 LPM Ground Monitor';
itemPicture[34] = 'monitor.jpg';
itemLocation[34] = ' OS3 (Middle Locker)';
itemPictureLocation[34] = 'monitorLocation.jpg';

itemName[35] = 'Ear Plugs in Storage Unit';
itemPicture[35] = 'earPlugs.jpg';
itemLocation[35] =  'Near Side 2';
itemPictureLocation[35] = 'earPlugsLocation.jpg';

itemName[36] = '2 x 65 mm TFT Branches';
itemPicture[36] = 'branch.jpg';
itemLocation[36] = ' Rear Lockers';
itemPictureLocation[36] = 'rearLockerBranch.jpg';

itemName[37] = '1 x Pack of Soft Ear Plugs';
itemPicture[37] = 'boxOfEarPlugs.jpg	';
itemLocation[37] = ' Near Side 2';
itemPictureLocation[37] = 'boxOfEarPlugsLocation.jpg';

itemName[38] = 'Webber ABS Plastic Wedge';
itemPicture[38] = 'PlasticWedge.jpg';
itemLocation[38] = ' Offside 2';
itemPictureLocation[38] = 'PlasticWedgeLocation.jpg';

itemName[39] = 'Multi-Purpose Hand Saw';
itemPicture[39] = 'handSaw.jpg';
itemLocation[39] = ' Offside 2';
itemPictureLocation[39] = 'handSawLocation.jpg';

itemName[40] = 'Chimmney Mirror';
itemPicture[40] = 'chimmneyMirror.jpg';
itemLocation[40] = ' Offside 2';
itemPictureLocation[40] = 'chimmneyMirrorLocation.jpg';

itemName[41] = 'Socket Set';
itemPicture[41] = 'socketSet.jpg';
itemLocation[41] = ' Offside 2';
itemPictureLocation[41] = 'socketSetLocation.jpg';

itemName[42] = 'Plugitup (DENSO Putty)';
itemPicture[42] = 'plugitup.jpg';
itemLocation[42] = ' Offside 2 Top Shelf';
itemPictureLocation[42] = 'plugitupLocation.jpg';

itemName[43] = 'Rakehoe (McLeod Tool)';
itemPicture[43] = 'Rakehoe(McLeod Tool).jpg';
itemLocation[43] = ' Offside 2 Top Shelf';
itemPictureLocation[43] = 'Rakehoe(McLeod Tool)Location.jpg';

itemName[44] = 'Broom/Squeegee Head';
itemPicture[44] = 'Broom.jpg';
itemLocation[44] = ' Offside 2 Top Shelf';
itemPictureLocation[44] = 'BroomLocation.jpg';

itemName[45] = 'Plugitup (DENSO Putty)';
itemPicture[45] = 'plugitup.jpg';
itemLocation[45] = ' Offside 2 Top Shelf';
itemPictureLocation[45] = 'plugitupLocation2.jpg';

itemName[46] = 'Broom/Squeegee Handle';
itemPicture[46] = 'Handle.jpg';
itemLocation[46] = ' Offside 2 Top Shelf';
itemPictureLocation[46] = 'HandleLocation.jpg';

itemName[47] = 'Shovel';
itemPicture[47] = 'shovel.png';
itemLocation[47] = ' Offside 2 Top Shelf';
itemPictureLocation[47] = 'shovelLocation.jpg';

itemName[48] = 'Shiftinng Spaners';
itemPicture[48] = 'shifters.jpg';
itemLocation[48] = ' Tool Bag - Offside 2';
itemPictureLocation[48] = 'toolBagLocation.jpg';

itemName[49] = 'Pelican Remote Area Lighting Tripod';
itemPicture[49] = 'pelican_tripod.jpg';
itemLocation[49] = ' Offside 2 Top Shelf';
itemPictureLocation[49] = 'tripodLocation.jpg';

itemName[50] = '250mm Pipe Wrench';
itemPicture[50] = 'pipeWrench.jpg';
itemLocation[50] = ' Tool Bag - Offside 2';
itemPictureLocation[50] = 'toolBagLocation.jpg';

itemName[51] = '165mm Stanley Folding Jab Saw';
itemPicture[51] = 'foldingJabSaw.jpg';
itemLocation[51] = ' Tool Bag - Offside 2';
itemPictureLocation[51] = 'toolBagLocation.jpg';

itemName[52] = 'Hacksaw';
itemPicture[52] = 'hacksaw.jpg';
itemLocation[52] = ' Tool Bag - Offside 2';
itemPictureLocation[52] = 'toolBagLocation.jpg';

itemName[53] = 'Screw Drivers';
itemPicture[53] = 'screwdrivers.jpg';
itemLocation[53] = ' Tool Bag - Offside 2';
itemPictureLocation[53] = 'toolBagLocation.jpg';

itemName[54] = 'Cold Chisel';
itemPicture[54] = 'coldChisel.jpg';
itemLocation[54] = ' Tool Bag - Offside 2';
itemPictureLocation[54] = 'toolBagLocation.jpg';

itemName[55] = 'Club Hammer';
itemPicture[55] = 'clubHammer.jpg';
itemLocation[55] = ' Tool Bag - Offside 2';
itemPictureLocation[55] = 'toolBagLocation.jpg';

itemName[56] = 'Claw Hammer.jpg';
itemPicture[56] = 'clawHammer.jpg';
itemLocation[56] = ' Tool Bag - Offside 2';
itemPictureLocation[56] = 'toolBagLocation.jpg';

itemName[57] = 'Imperial Allen Key Set';
itemPicture[57] = 'imperialAllenKeySet.jpg';
itemLocation[57] = ' Locker for 57';
itemPictureLocation[57] = 'toolBagLocation.jpg';

itemName[58] = 'Metric Allen Key Set';
itemPicture[58] = 'metricAllenKeySet.jpg';
itemLocation[58] = ' Tool Bag - Offside 2';
itemPictureLocation[58] = 'toolBagLocation.jpg';

itemName[59] = 'Torx Driver Set';
itemPicture[59] = 'torxDriverSet.jpg';
itemLocation[59] = ' Tool Bag - Offside 2';
itemPictureLocation[59] = 'toolBagLocation.jpg';

itemName[60] = '4mm Pin Punch';
itemPicture[60] = 'pinPunch.jpg';
itemLocation[60] = ' Tool Bag - Offside 2';
itemPictureLocation[60] = 'toolBagLocation.jpg';

function setup() {
  createCanvas(1024, 700);
  myFont = loadFont('arial.ttf');

  textSize(36);
  textFont(myFont);
  fill('#ED225D');
  // itemNumber = 0;  // test each item manually

  if(firstRun == true){
    preLoadAllImages();
    firstRun = false;
  }
}

function draw() {
  text('itemNumber = ' + itemNumber, 10 , 650);
  if(firstDraw== true){
    background(0);
    stroke(0);
    text('Click the mouse to view the item location **', 10, 50);
    text('Beta Version number ' + version, 10, 90);
    text('Please provide feedback to rupert.russell@acu.edu.au', 10, 120);
    firstDraw = false;
  }
}


function mouseClicked() {
  background(0);

  if(clickNumber % 2== 0){

    // Display the Item
    if(itemNumber==0) {image(itemPicture0, 0, 100); text(itemName[0], 10 , 90);}
    if(itemNumber==1) {image(itemPicture1, 0, 100); text(itemName[1], 10 , 90);}
    if(itemNumber==2) {image(itemPicture2, 0, 100); text(itemName[2], 10 , 90);}
    if(itemNumber==3) {image(itemPicture3, 0, 100); text(itemName[3], 10 , 90);}
    if(itemNumber==4) {image(itemPicture4, 0, 100); text(itemName[4], 10 , 90);}
    if(itemNumber==5) {image(itemPicture5, 0, 100); text(itemName[5], 10 , 90);}
    if(itemNumber==6) {image(itemPicture6, 0, 100); text(itemName[6], 10 , 90);}
    if(itemNumber==7) {image(itemPicture7, 0, 100); text(itemName[7], 10 , 90);}
    if(itemNumber==8) {image(itemPicture8, 0, 100); text(itemName[8], 10 , 90);}
    if(itemNumber==9) {image(itemPicture9, 0, 100); text(itemName[9], 10 , 90);}
    if(itemNumber==10) {image(itemPicture10, 0, 100); text(itemName[10], 10 , 90);}
    if(itemNumber==11) {image(itemPicture11, 0, 100); text(itemName[11], 10 , 90);}
    if(itemNumber==12) {image(itemPicture12, 0, 100); text(itemName[12], 10 , 90);}
    if(itemNumber==13) {image(itemPicture13, 0, 100); text(itemName[13], 10 , 90);}
    if(itemNumber==14) {image(itemPicture14, 0, 100); text(itemName[14], 10 , 90);}
    if(itemNumber==15) {image(itemPicture15, 0, 100); text(itemName[15], 10 , 90);}
    if(itemNumber==16) {image(itemPicture16, 0, 100); text(itemName[16], 10 , 90);}
    if(itemNumber==17) {image(itemPicture17, 0, 100); text(itemName[17], 10 , 90);}
    if(itemNumber==18) {image(itemPicture18, 0, 100); text(itemName[18], 10 , 90);}
    if(itemNumber==19) {image(itemPicture19, 0, 100); text(itemName[19], 10 , 90);}
    if(itemNumber==20) {image(itemPicture20, 0, 100); text(itemName[20], 10 , 90);}
    if(itemNumber==21) {image(itemPicture21, 0, 100); text(itemName[21], 10 , 90);}
    if(itemNumber==22) {image(itemPicture22, 0, 100); text(itemName[22], 10 , 90);}
    if(itemNumber==23) {image(itemPicture23, 0, 100); text(itemName[23], 10 , 90);}
    if(itemNumber==24) {image(itemPicture24, 0, 100); text(itemName[24], 10 , 90);}
    if(itemNumber==25) {image(itemPicture25, 0, 100); text(itemName[25], 10 , 90);}
    if(itemNumber==26) {image(itemPicture26, 0, 100); text(itemName[26], 10 , 90);}
    if(itemNumber==27) {image(itemPicture27, 0, 100); text(itemName[27], 10 , 90);}
    if(itemNumber==28) {image(itemPicture28, 0, 100); text(itemName[28], 10 , 90);}
    if(itemNumber==29) {image(itemPicture29, 0, 100); text(itemName[29], 10 , 90);}
    if(itemNumber==30) {image(itemPicture30, 0, 100); text(itemName[30], 10 , 90);}
    if(itemNumber==31) {image(itemPicture31, 0, 100); text(itemName[31], 10 , 90);}
    if(itemNumber==32) {image(itemPicture32, 0, 100); text(itemName[32], 10 , 90);}
    if(itemNumber==33) {image(itemPicture33, 0, 100); text(itemName[33], 10 , 90);}
    if(itemNumber==34) {image(itemPicture34, 0, 100); text(itemName[34], 10 , 90);}
    if(itemNumber==35) {image(itemPicture35, 0, 100); text(itemName[35], 10 , 90);}
    if(itemNumber==36) {image(itemPicture36, 0, 100); text(itemName[36], 10 , 90);}
    if(itemNumber==37) {image(itemPicture37, 0, 100); text(itemName[37], 10 , 90);}
    if(itemNumber==38) {image(itemPicture38, 0, 100); text(itemName[38], 10 , 90);}
    if(itemNumber==39) {image(itemPicture39, 0, 100); text(itemName[39], 10 , 90);}
    if(itemNumber==40) {image(itemPicture40, 0, 100); text(itemName[40], 10 , 90);}
    if(itemNumber==41) {image(itemPicture41, 0, 100); text(itemName[41], 10 , 90);}
    if(itemNumber==42) {image(itemPicture42, 0, 100); text(itemName[42], 10 , 90);}
    if(itemNumber==43) {image(itemPicture43, 0, 100); text(itemName[43], 10 , 90);}
    if(itemNumber==44) {image(itemPicture44, 0, 100); text(itemName[44], 10 , 90);}
    if(itemNumber==45) {image(itemPicture45, 0, 100); text(itemName[45], 10 , 90);}
    if(itemNumber==46) {image(itemPicture46, 0, 100); text(itemName[46], 10 , 90);}
    if(itemNumber==47) {image(itemPicture47, 0, 100); text(itemName[47], 10 , 90);}
    if(itemNumber==48) {image(itemPicture48, 0, 100); text(itemName[48], 10 , 90);}
    if(itemNumber==49) {image(itemPicture49, 0, 100); text(itemName[49], 10 , 90);}
    if(itemNumber==50) {image(itemPicture50, 0, 100); text(itemName[50], 10 , 90);}

    if(itemNumber==51) {image(itemPicture51, 0, 100); text(itemName[51], 10 , 90);}
    if(itemNumber==52) {image(itemPicture52, 0, 100); text(itemName[52], 10 , 90);}
    if(itemNumber==53) {image(itemPicture53, 0, 100); text(itemName[53], 10 , 90);}
    if(itemNumber==54) {image(itemPicture54, 0, 100); text(itemName[54], 10 , 90);}
    if(itemNumber==55) {image(itemPicture55, 0, 100); text(itemName[55], 10 , 90);}
    if(itemNumber==56) {image(itemPicture56, 0, 100); text(itemName[56], 10 , 90);}
    if(itemNumber==57) {image(itemPicture57, 0, 100); text(itemName[57], 10 , 90);}
    if(itemNumber==58) {image(itemPicture58, 0, 100); text(itemName[58], 10 , 90);}
    if(itemNumber==59) {image(itemPicture59, 0, 100); text(itemName[59], 10 , 90);}
    if(itemNumber==60) {image(itemPicture60, 0, 100); text(itemName[60], 10 , 90);}

    // text('true', 900 , 50);

  }else
  {

    // Display the location

    if(itemNumber == 0){image(itemPictureLocation0, 0, 100); text(itemLocation[0], 10 , 90); text(itemName[0], 10 , 50);}
    if(itemNumber == 1){image(itemPictureLocation1, 0, 100); text(itemLocation[1], 10 , 90); text(itemName[1], 10 , 50);}
    if(itemNumber == 2){image(itemPictureLocation2, 0, 100); text(itemLocation[2], 10 , 90); text(itemName[2], 10 , 50);}
    if(itemNumber == 3){image(itemPictureLocation3, 0, 100); text(itemLocation[3], 10 , 90); text(itemName[3], 10 , 50);}
    if(itemNumber == 4){image(itemPictureLocation4, 0, 100); text(itemLocation[4], 10 , 90); text(itemName[4], 10 , 50);}
    if(itemNumber == 5){image(itemPictureLocation5, 0, 100); text(itemLocation[5], 10 , 90); text(itemName[5], 10 , 50);}
    if(itemNumber == 6){image(itemPictureLocation6, 0, 100); text(itemLocation[6], 10 , 90); text(itemName[6], 10 , 50);}
    if(itemNumber == 7){image(itemPictureLocation7, 0, 100); text(itemLocation[7], 10 , 90); text(itemName[7], 10 , 50);}
    if(itemNumber == 8){image(itemPictureLocation8, 0, 100); text(itemLocation[8], 10 , 90); text(itemName[8], 10 , 50);}
    if(itemNumber == 9){image(itemPictureLocation9, 0, 100); text(itemLocation[9], 10 , 90); text(itemName[9], 10 , 50);}
    if(itemNumber == 10){image(itemPictureLocation10, 0, 100); text(itemLocation[10], 10 , 90); text(itemName[10], 10 , 50);}
    if(itemNumber == 11){image(itemPictureLocation11, 0, 100); text(itemLocation[11], 10 , 90); text(itemName[11], 10 , 50);}
    if(itemNumber == 12){image(itemPictureLocation12, 0, 100); text(itemLocation[12], 10 , 90); text(itemName[12], 10 , 50);}
    if(itemNumber == 13){image(itemPictureLocation13, 0, 100); text(itemLocation[13], 10 , 90); text(itemName[13], 10 , 50);}
    if(itemNumber == 14){image(itemPictureLocation14, 0, 100); text(itemLocation[14], 10 , 90); text(itemName[14], 10 , 50);}
    if(itemNumber == 15){image(itemPictureLocation15, 0, 100); text(itemLocation[15], 10 , 90); text(itemName[15], 10 , 50);}
    if(itemNumber == 16){image(itemPictureLocation16, 0, 100); text(itemLocation[16], 10 , 90); text(itemName[16], 10 , 50);}
    if(itemNumber == 17){image(itemPictureLocation17, 0, 100); text(itemLocation[17], 10 , 90); text(itemName[17], 10 , 50);}
    if(itemNumber == 18){image(itemPictureLocation18, 0, 100); text(itemLocation[18], 10 , 90); text(itemName[18], 10 , 50);}
    if(itemNumber == 19){image(itemPictureLocation19, 0, 100); text(itemLocation[19], 10 , 90); text(itemName[19], 10 , 50);}
    if(itemNumber == 20){image(itemPictureLocation20, 0, 100); text(itemLocation[20], 10 , 90); text(itemName[20], 10 , 50);}
    if(itemNumber == 21){image(itemPictureLocation21, 0, 100); text(itemLocation[21], 10 , 90); text(itemName[21], 10 , 50);}
    if(itemNumber == 22){image(itemPictureLocation22, 0, 100); text(itemLocation[22], 10 , 90); text(itemName[22], 10 , 50);}
    if(itemNumber == 23){image(itemPictureLocation23, 0, 100); text(itemLocation[23], 10 , 90); text(itemName[23], 10 , 50);}
    if(itemNumber == 24){image(itemPictureLocation24, 0, 100); text(itemLocation[24], 10 , 90); text(itemName[24], 10 , 50);}
    if(itemNumber == 25){image(itemPictureLocation25, 0, 100); text(itemLocation[25], 10 , 90); text(itemName[25], 10 , 50);}
    if(itemNumber == 26){image(itemPictureLocation26, 0, 100); text(itemLocation[26], 10 , 90); text(itemName[26], 10 , 50);}
    if(itemNumber == 27){image(itemPictureLocation27, 0, 100); text(itemLocation[27], 10 , 90); text(itemName[27], 10 , 50);}
    if(itemNumber == 28){image(itemPictureLocation28, 0, 100); text(itemLocation[28], 10 , 90); text(itemName[28], 10 , 50);}
    if(itemNumber == 29){image(itemPictureLocation29, 0, 100); text(itemLocation[29], 10 , 90); text(itemName[29], 10 , 50);}
    if(itemNumber == 30){image(itemPictureLocation30, 0, 100); text(itemLocation[30], 10 , 90); text(itemName[30], 10 , 50);}
    if(itemNumber == 31){image(itemPictureLocation31, 0, 100); text(itemLocation[31], 10 , 90); text(itemName[31], 10 , 50);}
    if(itemNumber == 32){image(itemPictureLocation32, 0, 100); text(itemLocation[32], 10 , 90); text(itemName[32], 10 , 50);}
    if(itemNumber == 33){image(itemPictureLocation33, 0, 100); text(itemLocation[33], 10 , 90); text(itemName[33], 10 , 50);}
    if(itemNumber == 34){image(itemPictureLocation34, 0, 100); text(itemLocation[34], 10 , 90); text(itemName[34], 10 , 50);}
    if(itemNumber == 35){image(itemPictureLocation35, 0, 100); text(itemLocation[35], 10 , 90); text(itemName[35], 10 , 50);}
    if(itemNumber == 36){image(itemPictureLocation36, 0, 100); text(itemLocation[36], 10 , 90); text(itemName[36], 10 , 50);}
    if(itemNumber == 37){image(itemPictureLocation37, 0, 100); text(itemLocation[37], 10 , 90); text(itemName[37], 10 , 50);}
    if(itemNumber == 38){image(itemPictureLocation38, 0, 100); text(itemLocation[38], 10 , 90); text(itemName[38], 10 , 50);}
    if(itemNumber == 39){image(itemPictureLocation39, 0, 100); text(itemLocation[39], 10 , 90); text(itemName[39], 10 , 50);}
    if(itemNumber == 40){image(itemPictureLocation40, 0, 100); text(itemLocation[40], 10 , 90); text(itemName[40], 10 , 50);}
    if(itemNumber == 41){image(itemPictureLocation41, 0, 100); text(itemLocation[41], 10 , 90); text(itemName[41], 10 , 50);}
    if(itemNumber == 42){image(itemPictureLocation42, 0, 100); text(itemLocation[42], 10 , 90); text(itemName[42], 10 , 50);}
    if(itemNumber == 43){image(itemPictureLocation43, 0, 100); text(itemLocation[43], 10 , 90); text(itemName[43], 10 , 50);}
    if(itemNumber == 44){image(itemPictureLocation44, 0, 100); text(itemLocation[44], 10 , 90); text(itemName[44], 10 , 50);}
    if(itemNumber == 45){image(itemPictureLocation45, 0, 100); text(itemLocation[45], 10 , 90); text(itemName[45], 10 , 50);}
    if(itemNumber == 46){image(itemPictureLocation46, 0, 100); text(itemLocation[46], 10 , 90); text(itemName[46], 10 , 50);}
    if(itemNumber == 47){image(itemPictureLocation47, 0, 100); text(itemLocation[47], 10 , 90); text(itemName[47], 10 , 50);}
    if(itemNumber == 48){image(itemPictureLocation48, 0, 100); text(itemLocation[48], 10 , 90); text(itemName[48], 10 , 50);}
    if(itemNumber == 49){image(itemPictureLocation49, 0, 100); text(itemLocation[49], 10 , 90); text(itemName[49], 10 , 50);}
    if(itemNumber == 50){image(itemPictureLocation50, 0, 100); text(itemLocation[50], 10 , 90); text(itemName[50], 10 , 50);}

    if(itemNumber == 51){image(itemPictureLocation51, 0, 100); text(itemLocation[51], 10 , 90); text(itemName[51], 10 , 50);}
    if(itemNumber == 52){image(itemPictureLocation52, 0, 100); text(itemLocation[52], 10 , 90); text(itemName[52], 10 , 50);}
    if(itemNumber == 53){image(itemPictureLocation53, 0, 100); text(itemLocation[53], 10 , 90); text(itemName[53], 10 , 50);}
    if(itemNumber == 54){image(itemPictureLocation54, 0, 100); text(itemLocation[54], 10 , 90); text(itemName[54], 10 , 50);}
    if(itemNumber == 55){image(itemPictureLocation55, 0, 100); text(itemLocation[55], 10 , 90); text(itemName[55], 10 , 50);}
    if(itemNumber == 56){image(itemPictureLocation56, 0, 100); text(itemLocation[56], 10 , 90); text(itemName[56], 10 , 50);}
    if(itemNumber == 57){image(itemPictureLocation57, 0, 100); text(itemLocation[57], 10 , 90); text(itemName[57], 10 , 50);}
    if(itemNumber == 58){image(itemPictureLocation58, 0, 100); text(itemLocation[58], 10 , 90); text(itemName[58], 10 , 50);}
    if(itemNumber == 59){image(itemPictureLocation59, 0, 100); text(itemLocation[59], 10 , 90); text(itemName[59], 10 , 50);}
    if(itemNumber == 60){image(itemPictureLocation60, 0, 100); text(itemLocation[60], 10 , 90); text(itemName[60], 10 , 50);}
    // text('itemNumber =' + itemNumber, 50 , 10);
    itemNumber = itemNumber + 1;

  }

  clickNumber = clickNumber + 1;
  if(itemNumber==61){
    itemNumber = 0;
  }
}

function preLoadAllImages() {
  itemPictureLocation0 = loadImage(itemPictureLocation[0]);
  itemPictureLocation1 = loadImage(itemPictureLocation[1]);
  itemPictureLocation2 = loadImage(itemPictureLocation[2]);
  itemPictureLocation3 = loadImage(itemPictureLocation[3]);
  itemPictureLocation4 = loadImage(itemPictureLocation[4]);
  itemPictureLocation5 = loadImage(itemPictureLocation[5]);
  itemPictureLocation6 = loadImage(itemPictureLocation[6]);
  itemPictureLocation7 = loadImage(itemPictureLocation[7]);
  itemPictureLocation8 = loadImage(itemPictureLocation[8]);
  itemPictureLocation9 = loadImage(itemPictureLocation[9]);
  itemPictureLocation10 = loadImage(itemPictureLocation[10]);
  itemPictureLocation11 = loadImage(itemPictureLocation[11]);
  itemPictureLocation12 = loadImage(itemPictureLocation[12]);
  itemPictureLocation13 = loadImage(itemPictureLocation[13]);
  itemPictureLocation14 = loadImage(itemPictureLocation[14]);
  itemPictureLocation15 = loadImage(itemPictureLocation[15]);
  itemPictureLocation16 = loadImage(itemPictureLocation[16]);
  itemPictureLocation17 = loadImage(itemPictureLocation[17]);
  itemPictureLocation18 = loadImage(itemPictureLocation[18]);
  itemPictureLocation19 = loadImage(itemPictureLocation[19]);
  itemPictureLocation20 = loadImage(itemPictureLocation[20]);
  itemPictureLocation21 = loadImage(itemPictureLocation[21]);
  itemPictureLocation22 = loadImage(itemPictureLocation[22]);
  itemPictureLocation23 = loadImage(itemPictureLocation[23]);
  itemPictureLocation24 = loadImage(itemPictureLocation[24]);
  itemPictureLocation25 = loadImage(itemPictureLocation[25]);
  itemPictureLocation26 = loadImage(itemPictureLocation[26]);
  itemPictureLocation27 = loadImage(itemPictureLocation[27]);
  itemPictureLocation28 = loadImage(itemPictureLocation[28]);
  itemPictureLocation29 = loadImage(itemPictureLocation[29]);
  itemPictureLocation30 = loadImage(itemPictureLocation[30]);
  itemPictureLocation31 = loadImage(itemPictureLocation[31]);
  itemPictureLocation32 = loadImage(itemPictureLocation[32]);
  itemPictureLocation33 = loadImage(itemPictureLocation[33]);
  itemPictureLocation34 = loadImage(itemPictureLocation[34]);
  itemPictureLocation35 = loadImage(itemPictureLocation[35]);
  itemPictureLocation36 = loadImage(itemPictureLocation[36]);
  itemPictureLocation37 = loadImage(itemPictureLocation[37]);
  itemPictureLocation38 = loadImage(itemPictureLocation[38]);
  itemPictureLocation39 = loadImage(itemPictureLocation[39]);
  
  itemPictureLocation40 = loadImage(itemPictureLocation[40]);
  itemPictureLocation41 = loadImage(itemPictureLocation[41]);
  itemPictureLocation42 = loadImage(itemPictureLocation[42]);
  itemPictureLocation43 = loadImage(itemPictureLocation[43]);
  itemPictureLocation44 = loadImage(itemPictureLocation[44]);
  itemPictureLocation45 = loadImage(itemPictureLocation[45]);
  itemPictureLocation46 = loadImage(itemPictureLocation[46]);
  itemPictureLocation47 = loadImage(itemPictureLocation[47]);
  itemPictureLocation48 = loadImage(itemPictureLocation[48]);
  itemPictureLocation49 = loadImage(itemPictureLocation[49]);

  itemPictureLocation50 = loadImage(itemPictureLocation[50]);
  itemPictureLocation51 = loadImage(itemPictureLocation[51]);
  itemPictureLocation52 = loadImage(itemPictureLocation[52]);
  itemPictureLocation53 = loadImage(itemPictureLocation[53]);
  itemPictureLocation55 = loadImage(itemPictureLocation[55]);
  itemPictureLocation54 = loadImage(itemPictureLocation[54]);
  itemPictureLocation56 = loadImage(itemPictureLocation[56]);
  itemPictureLocation57 = loadImage(itemPictureLocation[57]);
  itemPictureLocation58 = loadImage(itemPictureLocation[58]);
  itemPictureLocation59 = loadImage(itemPictureLocation[59]);
  
  itemPictureLocation60 = loadImage(itemPictureLocation[60]);

  itemPicture0 = loadImage(itemPicture[0]);
  itemPicture1 = loadImage(itemPicture[1]);
  itemPicture2 = loadImage(itemPicture[2]);
  itemPicture3 = loadImage(itemPicture[3]);
  itemPicture4 = loadImage(itemPicture[4]);
  itemPicture5 = loadImage(itemPicture[5]);
  itemPicture6 = loadImage(itemPicture[6]);
  itemPicture7 = loadImage(itemPicture[7]);
  itemPicture8 = loadImage(itemPicture[8]);
  itemPicture9 = loadImage(itemPicture[9]);
  itemPicture10 = loadImage(itemPicture[10]);
  itemPicture11 = loadImage(itemPicture[11]);
  itemPicture12 = loadImage(itemPicture[12]);
  itemPicture13 = loadImage(itemPicture[13]);
  itemPicture14 = loadImage(itemPicture[14]);
  itemPicture15 = loadImage(itemPicture[15]);
  itemPicture16 = loadImage(itemPicture[16]);
  itemPicture17 = loadImage(itemPicture[17]);
  itemPicture18 = loadImage(itemPicture[18]);
  itemPicture19 = loadImage(itemPicture[19]);
  itemPicture20 = loadImage(itemPicture[20]);
  itemPicture21 = loadImage(itemPicture[21]);
  itemPicture22 = loadImage(itemPicture[22]);
  itemPicture23 = loadImage(itemPicture[23]);
  itemPicture24 = loadImage(itemPicture[24]);
  itemPicture25 = loadImage(itemPicture[25]);
  itemPicture26 = loadImage(itemPicture[26]);
  itemPicture27 = loadImage(itemPicture[27]);
  itemPicture28 = loadImage(itemPicture[28]);
  itemPicture29 = loadImage(itemPicture[29]);
  itemPicture30 = loadImage(itemPicture[30]);
  itemPicture31 = loadImage(itemPicture[31]);
  itemPicture32 = loadImage(itemPicture[32]);
  itemPicture33 = loadImage(itemPicture[33]);
  itemPicture34 = loadImage(itemPicture[34]);
  itemPicture35 = loadImage(itemPicture[35]);
  itemPicture36 = loadImage(itemPicture[36]);
  itemPicture37 = loadImage(itemPicture[37]);
  itemPicture38 = loadImage(itemPicture[38]);
  itemPicture39 = loadImage(itemPicture[39]);
  
  itemPicture40 = loadImage(itemPicture[40]);
  itemPicture41 = loadImage(itemPicture[41]);
  itemPicture42 = loadImage(itemPicture[42]);
  itemPicture43 = loadImage(itemPicture[43]);
  itemPicture44 = loadImage(itemPicture[44]);
  itemPicture45 = loadImage(itemPicture[45]);
  itemPicture46 = loadImage(itemPicture[46]);
  itemPicture47 = loadImage(itemPicture[47]);
  itemPicture48 = loadImage(itemPicture[48]);
  itemPicture49 = loadImage(itemPicture[49]);
  itemPicture50 = loadImage(itemPicture[50]);

  itemPicture50 = loadImage(itemPicture[50]);
  itemPicture51 = loadImage(itemPicture[51]);
  itemPicture52 = loadImage(itemPicture[52]);
  itemPicture53 = loadImage(itemPicture[53]);
  itemPicture54 = loadImage(itemPicture[54]);
  itemPicture55 = loadImage(itemPicture[55]);
  itemPicture56 = loadImage(itemPicture[56]);
  itemPicture57 = loadImage(itemPicture[57]);
  itemPicture58 = loadImage(itemPicture[58]);
  itemPicture59 = loadImage(itemPicture[59]);
  itemPicture60 = loadImage(itemPicture[60]);

}
