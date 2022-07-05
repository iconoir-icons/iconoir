import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Scarf extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Scarf({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 11H5C3.89543 11 3 10.1046 3 9V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 21V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 3V7V11V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 7H3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
