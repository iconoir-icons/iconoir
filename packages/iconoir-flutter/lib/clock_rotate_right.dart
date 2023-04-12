import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ClockRotateRight extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ClockRotateRight({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L12 12L18 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.8883 10.5C21.1645 5.68874 17.013 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C16.1006 22 19.6248 19.5318 21.1679 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 16H21.4C21.7314 16 22 16.2686 22 16.6V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
