import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CreditCard extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const CreditCard({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 15C7.55228 15 8 14.5523 8 14C8 13.4477 7.55228 13 7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 9V5.6C2 5.26863 2.26863 5 2.6 5H21.4C21.7314 5 22 5.26863 22 5.6V9M2 9V18.4C2 18.7314 2.26863 19 2.6 19H21.4C21.7314 19 22 18.7314 22 18.4V9M2 9H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
