import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Fillet3D extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Fillet3D({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 20V16C2 8.26801 8.26801 2 16 2H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.8388 20.8391H17.3033M20.8388 20.8391V17.3035M20.8388 20.8391L18 18.0003" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 9L16 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 3"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
