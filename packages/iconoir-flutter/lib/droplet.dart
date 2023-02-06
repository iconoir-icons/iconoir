import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Droplet extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Droplet({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 14C20 9.58172 12 2 12 2C12 2 4 9.58172 4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14Z" stroke="currentColor"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
