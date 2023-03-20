import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Spotify extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Spotify({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 15C7 15 11.5 14 16 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5 12C6.5 12 12.5 10.5 17.5 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 9.00003C9 8.50005 14 8.00006 19 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
