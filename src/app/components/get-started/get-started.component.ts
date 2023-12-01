import { Component, ElementRef, NgZone, OnInit, ViewChild } from "@angular/core";
import * as THREE from "three";
@Component({
  selector: "app-get-started",
  templateUrl: "./get-started.component.html",
  styleUrls: ["./get-started.component.css"],
})
export class GetStartedComponent implements OnInit {
  constructor(private ngZone: NgZone) {}
  @ViewChild("canvasElement", { static: true }) canvasElementRef?: ElementRef<HTMLCanvasElement>;
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      //to remove change detection  because THREE.JS library   manages it.
      this.initialize();
    });
  }
  initialize() {
    const scene = new THREE.Scene();
    const size = {
      width: 800,
      height: 600,
    };
    const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: this.canvasElementRef?.nativeElement,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();
  }
}
