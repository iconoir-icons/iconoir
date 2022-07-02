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
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 13.8C19 9.82355 12 3 12 3C12 3 5 9.82355 5 13.8C5 17.7765 8.13401 21 12 21C15.866 21 19 17.7765 19 13.8Z" stroke="currentColor" stroke-width="1.5"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
