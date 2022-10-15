import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PlaylistPlay extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PlaylistPlay({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17.5L18.5 20V15L22 17.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 5L20 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 11L20 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 17L14 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
