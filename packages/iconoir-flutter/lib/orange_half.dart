import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class OrangeHalf extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const OrangeHalf({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2M12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12 22V12M12 2V12M12 12L17 17.5M12 12L17 7M12 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
