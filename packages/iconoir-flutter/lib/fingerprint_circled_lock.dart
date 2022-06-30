import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class FingerprintCircledLock extends StatelessWidget {
  const FingerprintCircledLock({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/FingerprintCircledLock.svg');
}
