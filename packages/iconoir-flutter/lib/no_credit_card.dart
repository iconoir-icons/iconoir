import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class NoCreditCard extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const NoCreditCard({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5H2.6C2.26863 5 2 5.26863 2 5.6V18.4C2 18.7314 2.26863 19 2.6 19H21.4C21.7314 19 22 18.7314 22 18.4V5.6C22 5.26863 21.7314 5 21.4 5H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 9H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 9H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
