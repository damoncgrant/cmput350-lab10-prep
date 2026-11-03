#version 120 // glsl version 1.2 for OpenGL 2.1

uniform vec2 windowSize;
uniform vec2 cursorPos;
uniform float time;

void main(void) {
    // Fragment shader should output into gl_FragColor an RGBA:
    vec2 position = gl_FragCoord.xy / windowSize;
    float blue = 0.5 + 0.5 * sin(time); // ensure blue lies between 0 and 1
    gl_FragColor = vec4(position.x, position.y, blue, 1.0);

    if (distance(gl_FragCoord.xy, cursorPos) <= 10.0) {
        gl_FragColor = vec4(1.0);
    }

}
