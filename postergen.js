let benzinb, benzinr
let gangsterb, gangsterr
let fontb, fontr
let pg
let xh, yh
let xi, yi
let sizeh, sizei
let heading, info
let ass, ak, sasha, gun, camera, police, ashtray, drum, uzi
let xoff, yoff
let br, bg, bb
let fr, fg, fb
let imagew, imageh
let pics, pic
let start
let sldbgr, sldbgb, sldbgg, sldtxtr, sldtxtg, sldtxtb, sldtxtsz, sldlinh,
    sldtxtxh, sldtxtyh, sldtxtisz, sldtxtixh, sldtxtiyh, sldimgw, sldimgh
let htxt, itxtaa
let picsel, picustom, imgcustom
let wp, hp
let na1, na2
let boldi, regi
let frami
let run
let saveimg
let helpi, helpitxt, helpdiv, helpim

function preload() {
  benzinb = loadFont('BenzinBold.ttf')
  benzinr = loadFont('BenzinRegular.ttf')
  gangsterb = loadFont('gangsterbold.otf')
  gangsterr = loadFont('gangsterregular.otf')
  imgcustom = null
  // ak = loadImage('ak.gif')
  // sasha = loadImage('sasha.gif')
  // gun = loadImage('gun.gif')
  // camera = loadImage('camera.gif')
  // police = loadImage('police.gif')
  ass = loadImage('ass.gif')
  // eu = loadImage('eu.gif')
  // ash = loadImage('ashtray.png')
  // drum = loadImage('drum.jpg')
  // uzi = loadImage('uzi.png')
  pics = [ass, imgcustom]
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  pg = createGraphics(3508, 4961)
  pixelDensity(1)
  xoff = 0
  yoff = 0
  helpdiv = select('#info')
  helpim = 0
  
  sldbgr = createSlider(0, 255, 255, 1)
  sldbgg = createSlider(0, 255, 255, 1)
  sldbgb = createSlider(0, 255, 255, 1)
  
  sldtxtr = createSlider(0, 255, 0, 1)
  sldtxtg = createSlider(0, 255, 0, 1)
  sldtxtb = createSlider(0, 255, 0, 1)
  
  sldtxtsz = createSlider(300, 1000, 400, 1)
  sldlinh = createSlider(0, 1000, 400, 1)
  sldtxtxh = createSlider(0, pg.width, 0, 1)
  sldtxtyh = createSlider(0, pg.height+pg.height/100*6, pg.height/100*6, 1)
  
  sldtxtisz = createSlider(20, 300, 100, 1)
  sldtxtixh = createSlider(-pg.width, pg.width, 0, 1)
  sldtxtiyh = createSlider(0, pg.height, pg.height/100*98, 1)
  
  sldimgw = createSlider(200, 2500, 300, 1)
  sldimgh = createSlider(300, 2200, 500, 1)
  
  htxt = createInput();
  itxt = createInput();
  
  // picsel = createSelect();
  // picsel.option('AK')
  // picsel.option('SASHA')
  // picsel.option('GUN')
  // picsel.option('CAMERA')
  // picsel.option('POLICE')
  // picsel.option('ASS')
  // picsel.option('EU')
  // picsel.option('ASHTRAY')
  // picsel.option('DRUM')
  // picsel.option('UZI')
  // picsel.changed(choosePic)
  ftsel = createSelect();
  ftsel.option('Gangster Grotesk')
  ftsel.option('Benzin')
  ftsel.changed(changeFont)

  picustom = createFileInput(chosenPic)
  
  na1 = [-width]
  na2 = [-height]
  
  pic = 0
  
  boldi = gangsterb
  regi = gangsterr
  
  run = createP("RUN")
  run.position(width/100*80, height/100*74)
  run.id('txtb')

  helpi = createP("HELP")
  helpi.position(width/100*80, height/100*88)
  helpi.id('txtb')
  
  saveimg = createP("SAVE")
  saveimg.position(width/100*80, height/100*81)
  saveimg.id('txtb')

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  run.position(width/100*80, height/100*74)
  saveimg.position(width/100*80, height/100*81)
  helpi.position(width/100*80, height/100*88)
}

function draw() {
  pics = [ass, imgcustom]
  
  fontb = boldi
  fontr = regi
  
  wp = width/100
  hp = height/100
  
  background(220)
  imageMode(CENTER)
  image(pg, width/2, height/2, pg.width/8, pg.height/8)
  
  //choose bg
  textFont(gangsterr)
  textSize(wp*2)
  text('CHOOSE BACKGROUND COLOR', wp*2, hp*8)
  textSize(wp*1.5)
  text('RED AMOUNT', wp*2, hp*12)
  sldbgr.position(wp*2, hp*14)
  sldbgr.style('width', wp*10)
  sldbgr.style('margin', '0 0')
  text('GREEN AMOUNT', wp*2, hp*20)
  sldbgg.position(wp*2, hp*22)
  sldbgg.style('width', wp*10)
  sldbgg.style('margin', '0 0')
  text('BLUE AMOUNT', wp*2, hp*28)
  sldbgb.position(wp*2, hp*30)
  sldbgb.style('width', wp*10)
  sldbgb.style('margin', '0 0')
  
  //choose font
  textSize(wp*2)
  text('CHOOSE FONT', wp*2, hp*36)
  ftsel.position(wp*2, hp*38)
  
  //type heading
  text('TYPE HEADING', wp*80, hp*8)
  htxt.position(wp*80, hp*10)
  
  //heading stuff
  textSize(wp*1.5)
  text('SIZE', wp*80, hp*16)
  sldtxtsz.position(wp*80, hp*18)
  sldtxtsz.style('width', wp*10)
  sldtxtsz.style('margin', '0 0')
  text('LINE HEIGHT', wp*80, hp*24)
  sldlinh.position(wp*80, hp*26)
  sldlinh.style('width', wp*10)
  sldlinh.style('margin', '0 0')
  text('HORIZONTAL POSITION', wp*80, hp*32)
  sldtxtxh.position(wp*80, hp*34)
  sldtxtxh.style('width', wp*10)
  sldtxtxh.style('margin', '0 0')
  text('VERTICAL POSITION', wp*80, hp*40)
  sldtxtyh.position(wp*80, hp*42)
  sldtxtyh.style('width', wp*10)
  sldtxtyh.style('margin', '0 0')
  
  //type info
  textSize(wp*2)
  text('TYPE INFO TEXT', wp*80, hp*48)
  itxt.position(wp*80, hp*50)
  
  //info stuff
  textSize(wp*1.5)
  text('SIZE', wp*80, hp*56)
  sldtxtisz.position(wp*80, hp*58)
  sldtxtisz.style('width', wp*10)
  sldtxtisz.style('margin', '0 0')
  text('HORIZONTAL POSITION', wp*80, hp*64)
  sldtxtixh.position(wp*80, hp*66)
  sldtxtixh.style('width', wp*10)
  sldtxtixh.style('margin', '0 0')
  text('VERTICAL POSITION', wp*80, hp*72)
  sldtxtiyh.position(wp*80, hp*74)
  sldtxtiyh.style('width', wp*10)
  sldtxtiyh.style('margin', '0 0')
  
  //text color
  textSize(wp*2)
  text('CHOOSE TEXT COLOR', wp*2, hp*46)
  textSize(wp*1.5)
  text('RED AMOUNT', wp*2, hp*52)
  sldtxtr.position(wp*2, hp*54)
  sldtxtr.style('width', wp*10)
  sldtxtr.style('margin', '0 0')
  text('GREEN AMOUNT', wp*2, hp*60)
  sldtxtg.position(wp*2, hp*62)
  sldtxtg.style('width', wp*10)
  sldtxtg.style('margin', '0 0')
  text('BLUE AMOUNT', wp*2, hp*68)
  sldtxtb.position(wp*2, hp*70)
  sldtxtb.style('width', wp*10)
  sldtxtb.style('margin', '0 0')
  
  //choose image
  textSize(wp*2)
  text('CHOOSE IMAGE', wp*2, hp*76)
  // picsel.position(wp*20, hp*78)
  picustom.position(wp*2, hp*78)
  
  //image size
  textSize(wp*1.5)
  text('IMAGE WIDTH', wp*2, hp*84)
  sldimgw.position(wp*2, hp*86)
  sldimgw.style('width', wp*10)
  sldimgw.style('margin', '0 0')
  text('IMAGE HEIGHT', wp*2, hp*92)
  sldimgh.position(wp*2, hp*94)
  sldimgh.style('width', wp*10)
  sldimgh.style('margin', '0 0')
  
  run.mousePressed(picani)
  saveimg.mousePressed(savePoster)
  helpi.mousePressed(openHelp)
  helpdiv.mousePressed(openHelp)
  
  br = sldbgr.value()
  bg = sldbgg.value()
  bb = sldbgb.value()
  fr = sldtxtr.value()
  fg = sldtxtg.value()
  fb = sldtxtb.value()
  sizeh = sldtxtsz.value()
  lineh = sldlinh.value()
  xh = sldtxtxh.value()
  yh = sldtxtyh.value()
  sizei = sldtxtisz.value()
  xi = sldtxtixh.value()
  yi = sldtxtiyh.value()
  imagew = sldimgw.value()
  imageh = sldimgh.value()
  heading = htxt.value()
  info = itxt.value()
  
  pg.fill(fr,fg,fb)
  push()
  pg.background(br,bg,bb)
  pop()
  
  if (imgcustom) {
    for (let t=0; t<30; t++) {
      pg.imageMode(CENTER)
      translate(pg.width/2,pg.height/2)
      pg.image(imgcustom, na2[t], na1[t], imagew, imageh)
    }
  } else {
    for (let t=0; t<30; t++) {
      pg.imageMode(CENTER)
      translate(pg.width/2,pg.height/2)
      pg.image(ass, na2[t], na1[t], imagew, imageh)
    }
  }
  
  push()
  pg.textFont(fontb)
  pg.textAlign(TOP, LEFT)
  pg.textSize(sizeh)
  pg.textLeading(lineh);
  pg.text(heading,xh, yh, pg.width, pg.height)
  pop()
  
  push()
  pg.textFont(fontr)
  pg.textSize(sizei)
  pg.textAlign(CENTER)
  pg.text(info, xi, yi, pg.width, pg.height)
  pop()
  
  
  if (frami == 2) {
    frameRate(10)
  }


}

function picani() {
  for (let i=0; i<30; i++) {
    let n2 = noise(xoff) * pg.width
    let n1 = noise(yoff) * pg.height
    xoff = xoff + 1
    yoff = yoff + 0.4
    na1[i] = n1
    na2[i] = n2
  }

  frami = 2

}

function savePoster() {
  pg.save("poster.png");
}

function chosenPic(file) {
  if (file.type === 'image') {
    imgcustom = loadImage(file.data)
  } else {
    imgcustom = null
  }
}

function choosePic() {
  console.log("custom" ,imgcustom)
  console.log("ass" ,ass)
  if (imgcustom = null) {
    pic = 0
  } else {
    pic = 1
  }

  // if (picsel.value() == 'AK') {
  //   pic = 0
  // }
  
  // if (picsel.value() == 'SASHA') {
  //   pic = 1
  // }
  
  // if (picsel.value() == 'GUN') {
  //   pic = 2
  // }
  
  // if (picsel.value() == 'CAMERA') {
  //   pic = 3
  // }
  
  // if (picsel.value() == 'POLICE') {
  //   pic = 4
  // }
  
  // if (picsel.value() == 'ASS') {
  //   pic = 5
  // }

  // if (picsel.value() == 'EU') {
  //   pic = 6
  // }

  // if (picsel.value() == 'ASHTRAY') {
  //   pic = 7
  // }

  // if (picsel.value() == 'DRUM') {
  //   pic = 8
  // }

  // if (picsel.value() == 'UZI') {
  //   pic = 9
  // }

  
  frami = 2
  
}

function openHelp() {
  if (helpim == 0) {
    helpdiv.style('display', 'initial')
    helpim = 1
  } else {
    helpdiv.style('display', 'none')
    helpim = 0
  }
}

function changeFont() {
  let val = ftsel.value()
  if (val === 'Benzin') {
    boldi = benzinb
    regi = benzinr 
  }
  
  if (val === 'Gangster Grotesk') {
    boldi = gangsterb
    regi = gangsterr
  }
}
