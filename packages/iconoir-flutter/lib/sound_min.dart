import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SoundMin extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SoundMin({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 14V10C7 9.44772 7.44772 9 8 9H10.6972C10.8946 9 11.0877 8.94156 11.2519 8.83205L15.4453 6.03647C16.1099 5.59343 17 6.06982 17 6.86852V17.1315C17 17.9302 16.1099 18.4066 15.4453 17.9635L11.2519 15.1679C11.0877 15.0584 10.8946 15 10.6972 15H8C7.44772 15 7 14.5523 7 14Z" stroke="currentColor" stroke-width="1.5"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
