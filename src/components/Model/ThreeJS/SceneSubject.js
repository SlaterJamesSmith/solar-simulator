import React, {Component } from 'react';
import * as THREE from 'three';
import starPic from '../../../assets/images/starMap.jpg';
import earthPic from '../../../assets/images/2k_earth_daymap.jpg';
import earthBump from '../../../assets/images/Earth.Bump.jpg';
import earthSpec from '../../../assets/images/earthSpec.jpg';
import earthCloud from '../../../assets/images/earthCloudMap.jpg';
import marsPic from '../../../assets/images/marsMap.jpg';
import marsBump from '../../../assets/images/marsBump.jpg';
import moonPic from '../../../assets/images/moonmap2k.jpg';
import moonBump from '../../../assets/images/moonbump2k.jpg';
import sunPic from '../../../assets/images/sunMapPic.jpg';
import sunCloud from '../../../assets/images/sunCloudMap.jpg';
import mercuryPic  from '../../../assets/images/mercurymap.jpg';
import mercuryBump  from '../../../assets/images/mercurybump.jpg';
import venusPic from '../../../assets/images/venusMap.jpg';
import venusBump from '../../../assets/images/venusBump.jpg';
import jupiterPic from '../../../assets/images/jupiterMap.jpg';
import saturnPic from '../../../assets/images/saturnmap.jpg';
import uranusPic from '../../../assets/images/uranusmap.jpg';
import neptunePic from '../../../assets/images/neptunemap.jpg';

import plutoPic from '../../../assets/images/plutomap2k.jpg';
import plutoBump from '../../../assets/images/plutobump2k.jpg';

export default scene => {
  //earth
  let earthGeometry = new THREE.SphereBufferGeometry( 0.5, 30, 30 );
  let earthTexture = new THREE.TextureLoader().load ( earthPic );
  let earthMaterial = new THREE.MeshPhongMaterial( {map: earthTexture} );
  earthMaterial.bumpMap= new THREE.TextureLoader().load( earthBump );
  earthMaterial.bumpScale = .05;
  earthMaterial.specularMap = new THREE.TextureLoader().load( earthSpec );
  earthMaterial.specular  = new THREE.Color('grey');

  //city lights needs to be pushed in
  // earthMaterial.cityMap= new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/2k_earth_nightmap.jpg');

  let cloudGeometry   = new THREE.SphereGeometry(0.51, 32, 32);
  let cloudMaterial  = new THREE.MeshPhongMaterial({
    map     : new THREE.TextureLoader().load(earthCloud),
    side        : THREE.DoubleSide,
    opacity     : 0.3,
    transparent : true,
    depthWrite  : false,
  });
  //earth end
  // create the iss inital shape
  let starGeometry  = new THREE.SphereGeometry(3500, 32, 32);
  let starMaterial  = new THREE.MeshBasicMaterial();
  starMaterial.map   = new THREE.TextureLoader().load( starPic );
  starMaterial.side  = THREE.BackSide;
  // create the mesh based on geometry and material
  let stars  = new THREE.Mesh(starGeometry, starMaterial);
  let issGeometry = new THREE.SphereBufferGeometry(0.005, 10, 10 );
  let issMaterial = new THREE.MeshBasicMaterial( {wireframe: true, color: 0xff0000 });
  let iss = new THREE.Mesh(issGeometry, issMaterial);

  // create the moon

  let moonGeometry = new THREE.SphereBufferGeometry(.05, 30, 30 );
  let moonMaterial = new THREE.MeshPhongMaterial();
  moonMaterial.map =  new THREE.TextureLoader().load( moonPic );
  moonMaterial.bumpMap= new THREE.TextureLoader().load( moonBump );
  moonMaterial.bumpScale = .0005;

  //create mars

  let marsGeometry = new THREE.SphereBufferGeometry(.3, 30, 30 );
  let marsMaterial = new THREE.MeshPhongMaterial();
  marsMaterial.map =  new THREE.TextureLoader().load( marsPic );
  marsMaterial.bumpMap= new THREE.TextureLoader().load( marsBump );
  marsMaterial.bumpScale = .005;

  //create sun
  let sunGeometry = new THREE.SphereBufferGeometry(20, 30, 30 );
  let sunMaterial = new THREE.MeshPhongMaterial();
  sunMaterial.map =  new THREE.TextureLoader().load( sunPic );
  sunMaterial.bumpMap= new THREE.TextureLoader().load( venusBump );
  sunMaterial.bumpScale = .05;
  let sunCloudGeometry   = new THREE.SphereGeometry(20, 32, 32);
  let sunCloudMaterial  = new THREE.MeshPhongMaterial({
    map     : new THREE.TextureLoader().load(sunCloud),
    side        : THREE.DoubleSide,
    opacity     : 0.3,
    transparent : true,
    depthWrite  : false,
  });

  //create mercury
  let mercuryGeometry = new THREE.SphereBufferGeometry(.6, 30, 30 );
  let mercuryMaterial = new THREE.MeshPhongMaterial();
  mercuryMaterial.map =  new THREE.TextureLoader().load( mercuryPic );
  mercuryMaterial.bumpMap= new THREE.TextureLoader().load( mercuryBump );
  mercuryMaterial.bumpScale = .005;

  //create venus
  let venusGeometry = new THREE.SphereBufferGeometry(.9, 30, 30 );
  let venusMaterial = new THREE.MeshPhongMaterial();
  venusMaterial.map =  new THREE.TextureLoader().load( venusPic);
  venusMaterial.bumpMap= new THREE.TextureLoader().load( venusBump);
  venusMaterial.bumpScale = .05;

  //create jupiter
  let jupiterGeometry = new THREE.SphereBufferGeometry(12, 30, 30 );
  let jupiterMaterial = new THREE.MeshPhongMaterial();
  jupiterMaterial.map =  new THREE.TextureLoader().load( jupiterPic );
  jupiterMaterial.bumpMap= new THREE.TextureLoader().load( venusBump );
  jupiterMaterial.bumpScale = .05;

  //create saturn
  let saturnGeometry = new THREE.SphereBufferGeometry(8, 30, 30 );
  let saturnMaterial = new THREE.MeshPhongMaterial();
  saturnMaterial.map =  new THREE.TextureLoader().load( saturnPic );
  saturnMaterial.bumpMap= new THREE.TextureLoader().load( venusBump );
  saturnMaterial.bumpScale = .05;

  let saturnRing = function() {
    var canvasResult	= document.createElement('canvas')
    canvasResult.width	= 915
    canvasResult.height	= 64
    var contextResult	= canvasResult.getContext('2d')
    }

  //create uranus
  let uranusGeometry = new THREE.SphereBufferGeometry(3, 30, 30 );
  let uranusMaterial = new THREE.MeshPhongMaterial();
  uranusMaterial.map =  new THREE.TextureLoader().load( uranusPic );
  uranusMaterial.bumpMap= new THREE.TextureLoader().load( venusBump );
  uranusMaterial.bumpScale = .05;

  //create neptune
  let neptuneGeometry = new THREE.SphereBufferGeometry(4, 30, 30 );
  let neptuneMaterial = new THREE.MeshPhongMaterial();
  neptuneMaterial.map =  new THREE.TextureLoader().load( neptunePic );
  neptuneMaterial.bumpMap= new THREE.TextureLoader().load( venusBump );
  neptuneMaterial.bumpScale = .05;

  //create pluto
  let plutoGeometry = new THREE.SphereBufferGeometry(.3, 30, 30 );
  let plutoMaterial = new THREE.MeshPhongMaterial();
  plutoMaterial.map =  new THREE.TextureLoader().load( plutoPic );
  plutoMaterial.bumpMap= new THREE.TextureLoader().load( plutoBump);
  plutoMaterial.bumpScale = .05;

  let moon = new THREE.Mesh(moonGeometry, moonMaterial);
  let mars = new THREE.Mesh(marsGeometry, marsMaterial);
  let cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
  let earth = new THREE.Mesh(earthGeometry, earthMaterial );
  let sun =  new THREE.Mesh(sunGeometry, sunMaterial );
  let sunCloudMesh = new THREE.Mesh(sunCloudGeometry, sunCloudMaterial);
  let mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial );
  let venus = new THREE.Mesh(venusGeometry, venusMaterial );
  let jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial );
  let saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
  let uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
  let neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
  let pluto = new THREE.Mesh(plutoGeometry, plutoMaterial);
  // better iss build plans
  //photo link
  // https://upload.wikimedia.org/wikipedia/commons/0/07/ISS_post-Nauka_installation_%283D_rendering%29.jpg

  //create a material, color or image texture
  scene.add(earth);
  scene.add(cloudMesh);
  scene.add(stars);
  scene.add(iss);
  scene.add(moon);
  scene.add(mars);
  scene.add(sun);
  scene.add(sunCloudMesh);
  scene.add(mercury);
  scene.add(venus);
  scene.add(jupiter);
  scene.add(saturn);
  scene.add(uranus);
  scene.add(neptune);
  scene.add(pluto);

  function getCoords() {
    fetch('https://api.wheretheiss.at/v1/satellites/25544?units=miles')
      .then(
        response => response.json(),
        error => console.log('An error occured.', error),
      ).then(function(json) {
        if (json) {
          iss.position.x = 0.53125 * Math.cos(Math.PI * json.longitude / 180) * Math.cos(Math.PI * json.latitude / 180);
          iss.position.z = -0.53125 * Math.sin(Math.PI * json.longitude / 180) * Math.cos(Math.PI * json.latitude / 180);
          iss.position.y = 0.53125 * Math.sin(Math.PI * json.latitude / 180);
        }
      });
  }
  setInterval(function() {getCoords();}, 5000);
  function update() {
    // sphere.rotation.y +=0.0000001736;
    cloudMesh.rotation.x += 0.0007;
    cloudMesh.rotation.y -= 0.0001;
    moon.rotation.y +=.000000005879;
    mars.rotation.y +=.005;
    sunCloudMesh.rotation.x += 0.0007;
    sunCloudMesh.rotation.y -= 0.0001;
    mercury.rotation.y +=0.005;
    venus.rotation.y +=0.005;
    jupiter.rotation.y +=0.005;
    saturn.rotation.y +=0.005;
    neptune.rotation.y+=0.005;
    uranus.rotation.y+=0.005;
    pluto.rotation.y +=0.005;
    //overall positioning

    sun.position.x = 400 * Math.sin(Date.now() / 31536000000);
    sun.position.z = 400 * Math.cos(Date.now() / 31536000000);

    sunCloudMesh.position.x = 400 * Math.sin(Date.now() / 31536000000);
    sunCloudMesh.position.z = 400 * Math.cos(Date.now() / 31536000000);


    mercury.position.x = 400 * Math.sin(Date.now() / 31536000000) + 270 * Math.sin(Date.now() / 3040);
    mercury.position.z = 400 * Math.cos(Date.now() / 31536000000) + 270 * Math.cos(Date.now() / 3040);

    venus.position.x = 400 * Math.sin(Date.now() / 31536000000) + 300 * Math.sin(Date.now() / 4500);
    venus.position.z = 400 * Math.cos(Date.now() / 31536000000) + 300 * Math.cos(Date.now() / 4500);



    moon.position.x = 3 * Math.sin(Date.now() / 2551392000);
    moon.position.z = 3 * Math.cos(Date.now() / 2551392000);

    mars.position.x = 400 * Math.sin(Date.now() / 31536000000) + 500 * Math.sin(Date.now() / 6040);
    mars.position.z = 400 * Math.cos(Date.now() / 31536000000) + 500 * Math.cos(Date.now() / 6040);

    jupiter.position.x = 400 * Math.sin(Date.now() / 31536000000) + 600 * Math.sin(Date.now() / 9040);
    jupiter.position.z = 400 * Math.cos(Date.now() / 31536000000) + 600 * Math.cos(Date.now() / 9040);

    saturn.position.x = 400 * Math.sin(Date.now() / 31536000000) + 1100 * Math.sin(Date.now() / 12040);
    saturn.position.z = 400 * Math.cos(Date.now() / 31536000000) + 1100 * Math.cos(Date.now() / 12040);

    uranus.position.x = 400 * Math.sin(Date.now() / 31536000000) + 1400 * Math.sin(Date.now() / 14040);
    uranus.position.z = 400 * Math.cos(Date.now() / 31536000000) + 1400 * Math.cos(Date.now() / 14040);

    neptune.position.x = 400 * Math.sin(Date.now() / 31536000000) + 1700 * Math.sin(Date.now() / 17040);
    neptune.position.z = 400 * Math.cos(Date.now() / 31536000000) + 1700 * Math.cos(Date.now() / 17040);

    pluto.position.x = 400 * Math.sin(Date.now() / 31536000000) + 1900 * Math.sin(Date.now() / 20040);
    pluto.position.z = 400 * Math.cos(Date.now() / 31536000000) + 1900 * Math.cos(Date.now() / 20040);


  }

  return {
    update
  };
};
