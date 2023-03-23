import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Inclination extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Inclination({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 19H3.41074C2.88164 19 2.61154 18.3649 2.97855 17.9838L16.4444 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 16C19.5 12.5 19 11 17 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
