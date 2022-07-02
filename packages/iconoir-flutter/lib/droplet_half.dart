import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DropletHalf extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const DropletHalf({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.3328 16C5.11669 15.3065 5 14.5673 5 13.8C5 9.82355 12 3 12 3C12 3 15.7476 6.65312 17.7586 10.1711M5.3328 16C6.23671 18.9004 8.87998 21 12 21C15.866 21 19 17.7765 19 13.8C19 12.7331 18.4961 11.4612 17.7586 10.1711M5.3328 16L17.7586 10.1711" stroke="currentColor" stroke-width="1.5"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
