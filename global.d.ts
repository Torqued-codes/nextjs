declare module "ogl" {
  export class Renderer {
    gl: WebGLRenderingContext & { canvas: HTMLCanvasElement };
    dpr: number;
    constructor(options?: { dpr?: number; alpha?: boolean });
    setSize(width: number, height: number): void;
    render(options: { scene: unknown }): void;
  }
  export class Program {
    constructor(gl: unknown, options: { 
      vertex: string; 
      fragment: string; 
      uniforms: unknown 
    });
  }
  export class Triangle {
    constructor(gl: unknown);
  }
  export class Mesh {
    constructor(gl: unknown, options: { 
      geometry: unknown; 
      program: unknown 
    });
  }
}