import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PantsPockets extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PantsPockets({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.03518 3.63328C5.01608 3.28936 5.28981 3 5.63426 3H18.3657C18.7102 3 18.9839 3.28936 18.9648 3.63328L18.0315 20.4333C18.0138 20.7512 17.7508 21 17.4324 21H14.5335C14.2293 21 13.9732 20.7723 13.9377 20.4701L12.5959 9.06507C12.5128 8.35854 11.4872 8.35854 11.4041 9.06507L10.0623 20.4701C10.0268 20.7723 9.7707 21 9.46645 21H6.56759C6.24915 21 5.98618 20.7512 5.96852 20.4333L5.03518 3.63328Z" stroke="currentColor" stroke-width="1.5"/>
<path d="M5 7.5H6.5C7.60457 7.5 8.5 6.60457 8.5 5.5V3" stroke="currentColor" stroke-width="1.5"/>
<path d="M18.5 7.5H17.5C16.3954 7.5 15.5 6.60457 15.5 5.5V3" stroke="currentColor" stroke-width="1.5"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}