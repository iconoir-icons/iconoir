import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Umbrella extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Umbrella({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7781 4.04337C17.7007 2.08074 14.9382 1 12 1C9.0618 1 6.29934 2.08089 4.2217 4.04337C2.14423 6.00617 1 8.61557 1 11.3911C1 11.7274 1.28853 12 1.64437 12C2.00038 12 2.28891 11.7274 2.28891 11.3911C2.28891 10.3784 3.16123 9.55439 4.23328 9.55439C6.12573 9.55439 5.43138 12 6.82219 12C8.21299 12 7.51871 9.55439 9.41109 9.55439C11.3035 9.55439 12 12 12 12C12 12 12.6965 9.55439 14.5889 9.55439C16.4813 9.55439 15.988 12 17.1778 12C18.3677 12 17.8743 9.55439 19.7667 9.55439C20.8388 9.55439 21.7111 10.3784 21.7111 11.3911C21.7111 11.7274 21.9996 12 22.3556 12C22.7115 12 23 11.7274 23 11.3911C23 8.61557 21.8559 6.00617 19.7781 4.04337Z" stroke="currentColor" stroke-width="1.5"/>
<path d="M12 12C12 12 12 16.0948 12 20C12 24 6 24 6 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}