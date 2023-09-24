import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ArrowUpRightSquareSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ArrowUpRightSquareSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 2.25C2.85442 2.25 2.25 2.85441 2.25 3.6V20.4C2.25 21.1456 2.85441 21.75 3.6 21.75H20.4C21.1456 21.75 21.75 21.1456 21.75 20.4V3.6C21.75 2.85442 21.1456 2.25 20.4 2.25H3.6ZM9.87884 8.42139H14.8286C15.0206 8.42139 15.2125 8.49461 15.3589 8.64106C15.4309 8.71296 15.4851 8.79584 15.5217 8.8843C15.5584 8.97273 15.5786 9.06969 15.5786 9.17139V14.1212C15.5786 14.5354 15.2428 14.8712 14.8286 14.8712C14.4144 14.8712 14.0786 14.5354 14.0786 14.1212V10.982L9.70207 15.3586C9.40918 15.6515 8.93431 15.6515 8.64141 15.3586C8.34852 15.0657 8.34852 14.5908 8.64141 14.2979L13.018 9.92139H9.87884C9.46463 9.92139 9.12884 9.5856 9.12884 9.17139C9.12884 8.75717 9.46463 8.42139 9.87884 8.42139Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
