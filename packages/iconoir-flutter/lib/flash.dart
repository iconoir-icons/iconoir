import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Flash extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Flash({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.42596 13.0064C8.36853 13.0053 8.36853 13.0053 8.31129 13C7.67797 12.9296 7.21591 12.3021 7.27924 11.5983L7.88954 4.1532C7.94845 3.49854 8.4442 3 9.03626 3H13.4991C13.6266 3 13.7532 3.0235 13.8737 3.06956C14.4756 3.29947 14.7958 4.02807 14.5889 4.69693L13.0999 8.80233L15.8465 8.80235C16.0497 8.80235 16.2493 8.86206 16.4251 8.97543C16.9755 9.33051 17.1627 10.1142 16.8432 10.7259C16.4287 11.5409 12.2632 18.5413 10.9171 20.8004C10.81 20.9802 10.5357 20.8921 10.5479 20.6831L10.9986 13L8.42596 13.0064Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
