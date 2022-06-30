import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class FingerprintCircledError extends StatelessWidget {
  const FingerprintCircledError({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/FingerprintCircledError.svg');
}
