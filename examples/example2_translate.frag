#ifdef GL_ES
precision mediump float;
#endif

const float PI =3.1415926535;

uniform vec2 u_resolution;



float circleshape(vec2 position, float radius){


    return step(radius,length(position-vec2(0.5)));}




void main(){


    vec2 position=gl_FragCoord.xy/u_resolution;

    vec3 color = vec3(0.71, 0.22, 0.22);

    vec2 translate= vec2(0.7,0.3);

    position +=translate;

    color+= vec3(circleshape(position,0.3));

    //color=vec3(polygon);


    gl_FragColor=vec4(color,1.0);




}