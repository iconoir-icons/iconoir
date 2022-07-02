import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Cash extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Cash({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5H21.4C21.7314 5 22 5.26863 22 5.6V18.4C22 18.7314 21.7314 19 21.4 19H14M14 5V19M14 5H10M14 19H10M10 19H2.6C2.26863 19 2 18.7314 2 18.4V5.6C2 5.26863 2.26863 5 2.6 5H10M10 19V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 9.84866C7 9.43457 6.58681 9.15025 6.25061 9.39198C5.49323 9.93653 5 10.8254 5 11.8294C5 12.8334 5.49323 13.7223 6.25061 14.2668C6.58681 14.5085 7 14.2243 7 13.8102C7 12.5562 7 11.3768 7 9.84866Z" fill="currentColor"/>
<path d="M17 9.84866C17 9.43457 17.4132 9.15025 17.7494 9.39198C18.5068 9.93653 19 10.8254 19 11.8294C19 12.8334 18.5068 13.7223 17.7494 14.2668C17.4132 14.5085 17 14.2243 17 13.8102C17 12.5562 17 11.3768 17 9.84866Z" fill="currentColor"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
