#ifdef GL_ES
precision mediump float;
#endif

const float PI =3.1415926535;

uniform vec2 u_resolution;


float polygonshape(vec2 position, float radius, float sides){

    float angle,slice,x;
    
    position = position * 2.0 -1.0;

    angle = atan(position.x,position.y);

    slice = PI*2.0/sides;


    return step(radius,cos(floor(0.5 +angle/slice)*slice-angle)*length(position));





}




void main(){


    vec2 position=gl_FragCoord.xy/u_resolution;

    vec3 color = vec3(0.0);
    float polygon = polygonshape(position,0.4,6.0);

    color=vec3(polygon);


    gl_FragColor=vec4(color,1.0);




}