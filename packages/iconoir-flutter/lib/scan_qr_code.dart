import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ScanQrCode extends StatelessWidget {
  const ScanQrCode({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ScanQrCode.svg');
}
