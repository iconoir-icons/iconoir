import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LotOfCash extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const LotOfCash({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 16V4H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 8H22.4C22.7314 8 23 8.26863 23 8.6V19.4C23 19.7314 22.7314 20 22.4 20H16M16 8V20M16 8H12M16 20H12M12 20H5.6C5.26863 20 5 19.7314 5 19.4V8.6C5 8.26863 5.26863 8 5.6 8H12M12 20V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
