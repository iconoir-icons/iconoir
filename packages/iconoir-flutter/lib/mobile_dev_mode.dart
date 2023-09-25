import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MobileDevMode extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const MobileDevMode({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19.01L12.01 18.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 18V21.4C18 21.7314 17.7314 22 17.4 22H6.6C6.26863 22 6 21.7314 6 21.4V18" stroke="currentColor" stroke-linecap="round"/>
<path d="M18 6V2.6C18 2.26863 17.7314 2 17.4 2H6.6C6.26863 2 6 2.26863 6 2.6V6" stroke="currentColor" stroke-linecap="round"/>
<path d="M15.5 8.5L19 12L15.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 8.5L5 12L8.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}