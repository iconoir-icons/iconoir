import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CreditCard2 extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const CreditCard2({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9V5.6C2 5.26863 2.26863 5 2.6 5H21.4C21.7314 5 22 5.26863 22 5.6V9V18.4C22 18.7314 21.7314 19 21.4 19H2.6C2.26863 19 2 18.7314 2 18.4V9ZM2 9H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="15" y="12" width="4" height="4" rx="0.6" fill="currentColor"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
