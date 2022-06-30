import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class FingerprintCircled extends StatelessWidget {
  const FingerprintCircled({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/FingerprintCircled.svg');
}
