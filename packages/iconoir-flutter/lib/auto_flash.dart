import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AutoFlash extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const AutoFlash({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.42596 13.0064C3.36853 13.0053 3.36853 13.0053 3.31129 13C2.67797 12.9296 2.21591 12.3021 2.27924 11.5983L2.88954 4.1532C2.94845 3.49854 3.4442 3 4.03626 3H8.49908C8.62656 3 8.75315 3.0235 8.87371 3.06956C9.47561 3.29947 9.79582 4.02807 9.58892 4.69693L8.09993 8.80233L10.8465 8.80235C11.0497 8.80235 11.2493 8.86206 11.4251 8.97543C11.9755 9.33051 12.1627 10.1142 11.8432 10.7259C11.4287 11.5409 7.26319 18.5413 5.91711 20.8004C5.80995 20.9802 5.53566 20.8921 5.54792 20.6831L5.99864 13L3.42596 13.0064Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 9.5L16.6923 8M22 9.5L21.3077 8M21.3077 8L19 3L16.6923 8M21.3077 8H16.6923" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
