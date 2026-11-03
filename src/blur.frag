#version 120 // glsl version 1.2 for OpenGL 2.1

uniform sampler2D texture;
uniform vec2 renderSize;

void main() {
    vec2 uv = gl_TexCoord[0].xy;
    vec2 pixelSize = 1.0 / renderSize;
    vec4 total = vec4(0.0);

    for (int y = -2; y < 3; y++) {
        for (int x = -2; x < 3; x++) {
            vec2 offset = vec2(float(x), float(y)) * pixelSize;
            total += texture2D(texture, uv + offset);
        }
    }

    gl_FragColor = total / 25.0;
}
