import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ServerConnectionSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ServerConnectionSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 5C5.25 4.58579 5.58579 4.25 6 4.25H18C18.4142 4.25 18.75 4.58579 18.75 5V13C18.75 13.4142 18.4142 13.75 18 13.75H12.75V18.25H21C21.4142 18.25 21.75 18.5858 21.75 19C21.75 19.4142 21.4142 19.75 21 19.75H3C2.58579 19.75 2.25 19.4142 2.25 19C2.25 18.5858 2.58579 18.25 3 18.25H11.25V13.75H6C5.58579 13.75 5.25 13.4142 5.25 13V5ZM9.51173 8.44156C9.81961 8.71865 9.84457 9.19287 9.56748 9.50075L9.55748 9.51186C9.28038 9.81975 8.80616 9.84471 8.49828 9.56761C8.1904 9.29052 8.16544 8.8163 8.44254 8.50842L8.45254 8.49731C8.72963 8.18942 9.20385 8.16447 9.51173 8.44156ZM12.5675 9.50075C12.8446 9.19287 12.8196 8.71865 12.5117 8.44156C12.2038 8.16447 11.7296 8.18942 11.4525 8.49731L11.4425 8.50842C11.1654 8.8163 11.1904 9.29052 11.4983 9.56761C11.8062 9.84471 12.2804 9.81975 12.5575 9.51186L12.5675 9.50075Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
