import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class QrCode extends StatelessWidget {
  const QrCode({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/QrCode.svg');
}
