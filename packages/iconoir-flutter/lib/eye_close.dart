import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class EyeClose extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const EyeClose({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5 16L17.0248 12.6038" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17.5V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.5 16L6.96895 12.6124" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 8C6.6 16 17.4 16 21 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
