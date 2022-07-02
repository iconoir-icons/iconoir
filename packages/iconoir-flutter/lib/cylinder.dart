import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Cylinder extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Cylinder({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C20 2 20 5 20 5C20 5 20 8 12 8C4 8 4 5 4 5C4 5 4 2 12 2Z" stroke="currentColor"/>
<path d="M12 16C20 16 20 19 20 19C20 19 20 22 12 22C4 22 4 19 4 19C4 19 4 16 12 16Z" stroke="currentColor"/>
<path d="M20 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
