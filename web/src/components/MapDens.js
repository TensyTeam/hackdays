import React from 'react'
import $ from 'jquery'


export default function MapDens(props) {
	return (
		<img className="map_density" src={'https://image.maps.api.here.com/mia/1.6/heat\
?app_id=qa0WJfBASLFPiWJIm8zA\
&app_code=CSg50IevfYpGuIaHzNjj_Q\
\
&a0=50.1217453,8.67186\
&rad0=1\
&l0=3\
\
&a1=50.12177,8.67187\
&rad1=2\
&l1=2\
\
&a2=50.12177,8.6719\
&rad2=2\
&l2=2\
\
&a3=50.1217453,8.6719\
&rad3=2\
&l3=2\
\
&a4=50.1218,8.67185\
&rad4=2\
&l4=2\
\
&a5=50.1218,8.67187\
&rad5=2\
&l5=2\
\
&a6=50.1218,8.67217\
&rad6=2\
&l6=2\
\
&a7=50.12173,8.6721\
&rad7=1\
&l7=3\
\
&a8=50.12195,8.6722\
&rad8=2\
&l8=2\
\
&a9=50.1219,8.67185\
&rad9=1\
&l9=3\
\
&a10=50.12197,8.67215\
&rad10=2\
&l10=2\
\
&z=19\
&h=' + $(window).height() + '\
&w=' + $(window).width() + '\
&op=70\
&ppi=1'}
		/>
	)
}
