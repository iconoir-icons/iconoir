import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PlaylistAdd extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PlaylistAdd({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 18H20M22 18H20M20 18V16M20 18V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 11L20 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 17L14 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 5L20 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
