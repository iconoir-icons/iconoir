import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LockKey extends StatelessWidget {
  const LockKey({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/LockKey.svg');
}
