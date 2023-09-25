import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class OSquare extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const OSquare({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" stroke-width="1.5" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.2 8H11.8C10.8059 8 10 8.80589 10 9.8V14.2C10 15.1941 10.8059 16 11.8 16H12.2C13.1941 16 14 15.1941 14 14.2V9.8C14 8.80589 13.1941 8 12.2 8Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}