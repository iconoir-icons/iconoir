import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class EvPlugError extends StatelessWidget {
  const EvPlugError({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/EvPlugError.svg');
}
